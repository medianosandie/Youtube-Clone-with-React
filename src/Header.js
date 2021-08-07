
import './App.css';
import {Link} from 'react-router-dom';
import './style/header.css';
import React,{useEffect} from 'react';

export default function Header() {

	useEffect(()=>{
		const scrollableMenuButtonsContainer =  document.querySelector('#scrollable-menu ul');
		const sidebar =  document.querySelector('#sidebar');
		const hamburgerButton = document.querySelector('#hamburger-button');
		const sidebarButtonsContainer = document.querySelector('#sidebar ul');
		const sidebarButtons = document.querySelectorAll('#sidebar ul  li');

		const normalScrollableButton = '<li class="pil-shaped">tes</li>';
		const activeScrollableButton = '<li class="pil-shaped active">xcvxvxcvxcvxcvsdf</li>';

		for(let i = 0 ; i < 20 ; i++){
			scrollableMenuButtonsContainer.innerHTML += i !== 3 ? normalScrollableButton : activeScrollableButton;
		}

		hamburgerButton.addEventListener('click',()=>{
			sidebar.classList.toggle(sidebar.getAttribute.class);
			sidebar.classList.add('expanded-sidebar');
			
			sidebarButtonsContainer.classList.toggle('spread-menu');
		
			sidebarButtons.forEach( sidebarButton => {
				if(!sidebarButton.classList.contains('main-menu')){
					sidebarButton.classList.toggle('hide');
				}
				sidebarButton.classList.toggle('flex-row');
			});
		});
		
		window.addEventListener('load', ()=>{
			if(window.innerWidth <=793){
				sidebar.classList.add('hide');
			}
			
			else if(window.innerWidth <= 1315 ){
				sidebar.classList.add('small-sidebar');
			}
			
			else{
				sidebar.classList.add('expanded-sidebar');
			}
		});
		
		window.addEventListener('resize', ()=>{
			if(window.innerWidth <=793){
				sidebar.classList.add('hide');
			}
			
			else if(window.innerWidth <= 1315 ){
				sidebar.classList.add('small-sidebar');
				sidebar.classList.remove('hide');
				sidebar.classList.remove('expanded-sidebar');
			}
			
			else{
				sidebar.classList.remove('small-sidebar');
				sidebar.classList.remove('hide');
				sidebar.classList.add('expanded-sidebar');
			}
		});
	},[]);

	return (
			<header>
				<nav>
					<section class="left-section">
						<div id="hamburger-button" class="hamburger-button icon-container">
							<img src="./assets/hamburger.svg" alt=""/>
						</div>
						<div class="logo icon-container">
							<h1>Youtube</h1>
							<img src="./assets/YoutubeLogo.svg" alt=""/>
						</div>
					</section>
					<section class="center-section">
						<input type="text"/>
						<div class="search-icon icon-container"></div>
						<div class="mic-icon icon-container">
							<img src="./assets/Microphone.svg" alt=""/>
						</div>
					</section>
					<section class="right-section">
						<div class="create-icon icon-container"></div>
						<div class="youtube-apps icon-container">
							<img src="./assets/DotsNine.svg" alt=""/>
						</div>
						<div class="notification-icon icon-container">
							<img src="./assets/Bell.svg" alt=""/>
						</div>
						<div class="avatar icon-container"></div>
					</section>
				</nav>
				<div id="sidebar">
					<ul>
						<Link to="/">
                            <li class="icon-container main-menu">
                                <div class="icon">
                                    <img src="./assets/House.svg" alt=""/>
                                </div>
                                <h3>beranda</h3>
                            </li>
                        </Link>
                        <Link to="/eksplorasi">
                            <li class="icon-container main-menu">
                                <div class="icon">
                                    <img src="./assets/Compass.svg" alt=""/>
                                </div>
                                <h3>eksplorasi</h3>
                            </li>
                        </Link>
						<Link to="/subscription">
                            <li class="icon-container main-menu">
                                <div class="icon"></div>
                                <h3>subscription</h3>
                            </li>
                        </Link>
						<li class="icon-container main-menu">
							<div class="icon"></div>
							<h3>koleksi</h3>
						</li>
						<li class="icon-container hide">
							<div class="icon"></div>
							<h3>koleksi</h3>
						</li>
						<li class="icon-container hide">
							<div class="icon"></div>
							<h3>koleksi</h3>
						</li>
						<li class="icon-container hide">
							<div class="icon"></div>
							<h3>koleksi</h3>
						</li>
						<li class="icon-container hide">
							<div class="icon"></div>
							<h3>koleksi</h3>
						</li>
					</ul>
				</div>
				<div id="scrollable-menu" class="scrollable-menu">
					<ul>
					</ul>
				</div>
			</header>
  	);
}


