function OnrizonTVBar() {
    return (
        <>
            <div className="onrizontv">
                <div className="content">
                    <a href="https://onrizon.tv/" target="_blank" className="logo-onrizontv" />
                    <nav>
                        <a target="_blank" href="https://wos.gg">WORDS ON STREAM</a>
                        <a target="_blank" href="https://gos.gg">GARTIC ON STREAM</a>
                        <a target="_blank" href="https://gartic.show">GARTIC SHOW</a>
                        <a target="_blank" href="https://streampairs.com">STREAM PAIRS</a>
                        {/* <a className="new" target="_blank" href="#">EMOTE SEARCH</a> */}
                    </nav>
                </div>
            </div>

            <style jsx>{`
                .onrizontv {
                    background-color: red;
                    height: 70px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .content {
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                }
                .logo-onrizontv {
                    width: 175px;
                    height: 48px;
                    background-image: url(/site/imgs/onrizontv.svg);
                    background-repeat: no-repeat;
                    background-position: center;
                }
                nav {
                    display: flex;
                    flex-direction: row;
                    align-items: flex-end;
                }
                nav a {
                    color: #FFF;
                    margin-left: 60px;
                    font-size: 15px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                nav a:hover {
                    color: #22BBFF;
                }
                .new {
                    margin-top: -15px;
                }
                .new:before {
                    content: 'NEW!';
                    color: #000000;
                    font-size: 11px;
                    background-color: #21BAFF;
                    padding: 2px 5px;
                    border-radius: 2px;
                    margin-bottom: 4px;
                }
                @media (max-width: 640px) {
                    .onrizontv {
                        z-index: 10;
                        width: 100vw;
                        height: 50px;
                        position: fixed;
                    }
                    .content {
                        justify-content: center;
                    }
                    .logo-onrizontv {
                        width: 122px;
                        height: 34px;
                        background-size: contain;
                    }
                    .onrizontv nav {
                        display: none;
                    }
                }

            `}</style>
        </>
    );
}

export default OnrizonTVBar;