import Layout from '../../components/Layout'
import {getAllPostIds, getPostData} from '../../lib/posts'
import Date from '../../components/date'
import Head from 'next/head'
import {marked} from 'marked'
import dynamic from 'next/dynamic'
const ReactMarkdown = dynamic(() => import('react-markdown').then((module) => module.default), {ssr: false})
import {dracula} from 'react-syntax-highlighter/dist/cjs/styles/prism'
import githubStyles from '../../styles/github-markdown.module.css'
import markdownStyles from '../../styles/markdown.module.scss'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'  
// tokenizer 재정의
const tokenizer = {
  codespan(src) {
    const match = src.match(/\$+([^\$]+?)\$+/);
    // 패턴이 일치할 경우
    if (match) {
      return {
        type: 'codespan',
        raw: match[0],
        text: match[1].trim()
      };
    }
    return false;
  }
};

// Override function
const renderer = {
  heading(text, level) {
    const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
    return `
            <h${level}>
              <a name="${escapedText}" class="anchor" href="#${escapedText}">
                <span class="header-link"></span>
              </a>
              ${text}
            </h${level}>`;
  }
};

const renderers = {
  code(componentProps) {
    const {node, inline, className, children, ...props} = componentProps
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter style={dracula} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
    ) : (
      <code className={className} children={String(children).replace(/\n$/, '')} {...props} />
    )
  }
}

marked.use({ tokenizer, renderer });

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
      props: {
        postData
      }
    }
  }

export default function Post({postData}) {
    const result = marked.parse(postData.fileContents)
    return(
        <>
        <Head>
            <title>
                {postData.title}
            </title>
        </Head>
          <div className='info'>
            <span className='written'>
              <Date dateString={postData.date}/>
            </span>
              By {postData.author ??'sangwoo kim'}
          </div>
          <div>
            <ReactMarkdown 
              linkTarget='_blank'
              components={renderers}
              children={postData.rawContent}
              className={markdownStyles.post}
            />
          </div>
            <style jsx>{`
              .info {
                color: grey;
                display: flex;
                justify-content: space-between;
                height: 50px;
              }  
              .written {
                color: blue;
              }
            `}</style>
        </>
    )
}