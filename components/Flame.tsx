export default function Flame() {
    return (
        <div className='flame-wrapper'>
            <div className='flame red'></div>
            <div className='flame orange'></div>
            <div className='flame gold'></div>
            <div className='flame white'></div>
            <div className='base blue'></div>
            <div className='base black'></div>
            <style jsx>{`
                .flame-wrapper {
                    position: fixed;
                    right: 70px;
                    bottom: 70px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-left: 30px;
                    animation: flicker 0.8s ease-in infinite;
                }
                .red {
                    width: 50px;
                    height: 50px;
                    background: orangered;
                    box-shadow: 0px 0px 10px 5px orangered;
                }
                .orange {
                    width: 30px;
                    height: 30px;
                    background: orange;
                    box-shadow: 0px 0px 12px 6px orange;
                }
                .gold {
                    width: 20px;
                    height: 20px;
                    background: gold;
                    box-shadow: 0px 0px 9px 4px gold;
                }
                .white {
                    width: 15px;
                    height: 15px;
                    background: lightyellow;
                    box-shadow: 0px 0px 9px 4px lightyellow;
                }
                .base {
                    border-radius: 50%;
                    position: absolute;
                }
                .blue {
                    width: 10px;
                    height: 10px;
                    bottom: -5px;
                    background: darkblue;
                    box-shadow: 0px 0px 15px 10px darkblue;
                }
                .black {
                    width: 25px;
                    height: 25px;
                    background: black;
                    bottom: -40px;
                    box-shadow: 0px 0px 10px 10px black;
                    border-radius: 50% 20% 30% 0;
                    transform: rotate(-45deg)
                }
                .flame {
                    bottom: 0;
                    position: absolute;
                    border-radius: 50% 0 50% 50%;
                    transform: rotate(-45deg)
                }
                @keyframes flicker {
                    0% {transform: rotate(-1deg);}
                    20% {transform: rotate(2deg) scaleY(1.05);}
                    40% {transform: rotate(-2deg) scaleX(1.05);}
                    60% {transform: rotate(1deg) scaleX(1.1);}
                    80% {transform: rotate(-1deg) scaleY(0.90);}
                    100% {transform: rotate(3deg);}
                }
            `}
            </style>
        </div>
    )
}