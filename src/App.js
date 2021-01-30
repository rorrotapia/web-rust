import './assets/sass/App.scss';
import "./components/FontawesomeIcons";
import SidebarLeft from "./components/SidebarLeft";
import Wrapper from "./components/Wrapper";
import SidebarRight from "./components/SidebarRight";
import {Fragment} from "react";
import Video from "./components/Video";


function App() {

    var Global = {
        btnMenuToggle : null,
        idServer : null,
        init: function (param) {
            Global.btnMenuToggle = param.btnMenuToggle;
            Global.idServer = param.idServer;
            Global.btnMenuToggle.addEventListener('click', Global.navBarToggle);
            window.addEventListener('load', Global.toggleTabs);
            Global.getServerStatus();
            Global.getServerInfo();
        },
        navBarToggle: function () {
            var element = document.getElementById("app");
            element.classList.toggle("open");
        },
        toggleTabs: function (){
            const elements = Array.prototype.slice.call(document.querySelectorAll('[data-target]'), 0);

            if (elements.length > 0) {
                elements.forEach( el => {
                    el.addEventListener('click', () => {
                        var tabs = Array.prototype.slice.call(document.getElementsByClassName("is-active"),0);
                        tabs.forEach( el => {
                            el.classList.remove('is-active');
                        });
                        const target = el.dataset.target;
                        const $target = document.getElementById(target);
                        el.classList.add('is-active');
                        $target.classList.add('is-active');
                    });
                });
            }
        },
        getServerStatus: function () {
            Tools.getJson("https://api.rust-servers.info/status/"+Global.idServer, function (reponse) {
                var name = document.getElementById('server-name');
                var status = document.getElementById('server-status');
                var players = document.getElementById('server-players');
                var playersMax = document.getElementById('server-players-max');

                name.innerHTML = reponse.name;
                status.innerHTML = reponse.status;
                status.classList.add(reponse.status.toLowerCase());
                players.innerHTML = reponse.players;
                playersMax.innerHTML = reponse.players_max;
            })

        },
        getServerInfo: function () {
            Tools.getJson("https://api.rust-servers.info/info/"+Global.idServer, function (reponse) {
                var seed = reponse.seed
                var size = (reponse.size !== "") ? reponse.size : 6000;
                var url = "https://rustmaps.com/map/"+size+"_"+seed

                var urlElement = document.getElementById('url-map');
                urlElement.href = url;
            })
        }

    }
    var Tools = {
        getJson: function (url, callback) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType = 'json';
            xhr.onload = function() {
                var status = xhr.status;
                if (status === 200) {
                    callback(xhr.response);
                } else {
                    callback(xhr.response);
                }
            };
            xhr.send();
        }
    }
    var animFade = {
        init: function () {
            window.addEventListener('load', animFade.addFade)
            window.addEventListener('scroll', animFade.addFade)
        },
        addFade: function () {
            const elements = Array.prototype.slice.call(document.querySelectorAll('[data-fade]'), 0);

            var windowHeight = window.innerHeight,
                windowTopPosition = window.scrollY,
                windowBottomPosition = (windowTopPosition + windowHeight);
            //Récuperation des elements
            if (elements.length > 0) {
                elements.forEach( el => {
                    var elementTopPosition = animFade.offSet(el);
                    //On prend la position de la div
                    if (elementTopPosition <= windowBottomPosition) {
                        //On ajoute l'anim
                        el.classList.add("fade-"+el.dataset.fade)
                    } else {
                        el.classList.remove("fade-"+el.dataset.fade);
                    }
                });
            }
        },
        offSet : function (el) {
            var rect = el.getBoundingClientRect(),
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return rect.top + scrollTop
        }
    }

    window.addEventListener("DOMContentLoaded", (event) => {
        animFade.init();
        Global.init({
            btnMenuToggle: document.getElementById('icon-menu'),
            idServer: "3631",
        });
    });
  return (
      <Fragment>
          <Video />
          <div className="App bg-rust-1 text-light d-flex flex-wrap">
              <SidebarLeft />
              <Wrapper />
              <SidebarRight />
          </div>
      </Fragment>
  );
}

export default App;
