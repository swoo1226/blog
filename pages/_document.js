import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <body>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function() {
                    var w = window;
                    if (w.ChannelIO) {
                      return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
                    }
                    var ch = function() {
                      ch.c(arguments);
                    };
                    ch.q = [];
                    ch.c = function(args) {
                      ch.q.push(args);
                    };
                    w.ChannelIO = ch;
                    function l() {
                      if (w.ChannelIOInitialized) {
                        return;
                      }
                      w.ChannelIOInitialized = true;
                      var s = document.createElement('script');
                      s.type = 'text/javascript';
                      s.async = true;
                      s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
                      s.charset = 'UTF-8';
                      var x = document.getElementsByTagName('script')[0];
                      x.parentNode.insertBefore(s, x);
                    }
                    if (document.readyState === 'complete') {
                      l();
                    } else if (window.attachEvent) {
                      window.attachEvent('onload', l);
                    } else {
                      window.addEventListener('DOMContentLoaded', l, false);
                      window.addEventListener('load', l, false);
                    }
                  })();
                  ChannelIO('boot', {
                    "pluginKey": "1c80d699-4234-461e-ad2c-2bc00648c9d7"
                  });
                `,
              }}
            />
            <Main />
            <NextScript />
          </body>
        </Head>
      </Html>
    );
  }
}

export default MyDocument;
