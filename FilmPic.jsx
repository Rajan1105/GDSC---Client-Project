import React from 'react';
import myImage from './Aaine Main.png';
import myImage2 from './GDSC - Director Pic.png';
import myImage3 from './GDSC - Film Pic .png';
import myImage4 from './GDSC Director2.png'

class FilmPic extends React.Component{
    render (){
        return(
            <div className = "FilmPic">
                <div className = "film-img mt-32">
                    <img className="h-84 w-8/12 ml-56" 
                    src = {myImage} 
                    alt = "Aaine Main"
                    />
                </div>
                <div className = "text-white mt-8 ml-56 text-2xl font-bold">Aaine Mei | Short Film</div>
                <div className = "bg-black bg-opacity-10 h-8/12 mt-20 w-8/12 rounded-2xl ml-56 p-2 shadow-lg">
                    <p className = "text-white text-2xl text-center font-bold pt-5">AWARDS AND ACHIEVEMENTS</p>
                    <p className = "text-white text-lg ml-20 mb-5 mt-5 inline-block text-lg"> > Oscar</p>
                    <p className = "text-white text-lg ml-40 mb-5 mt-5 inline-block text-lg "> > IIFA</p>
                    <p className = "text-white text-lg ml-40 mb-5 mt-5 inline-block text-lg"> > 100K+ views on Youtube</p>
                </div>
                <div className = "bg-black bg-opacity-10  w-8/12 mt-14 h-7/12 rounded-2xl ml-56 pb-5 shadow-lg p-4">
                    <p className = "text-white text-2xl text-center font-bold pt-4">JOURNEY OF THE FILM</p>
                    <p className = "text-white text-center text-justify ml-10 mr-10 mt-4 p-4 text-lg ">
                    Aaine Mein is a short film. It is written, 
                    directed, and produced by Ankit Raaj Sinha. 
                    This award-winning short film has been 
                    screened at Jaipur International Film 
                    Festival 24, Mumbai Short International 
                    Film Festival, White Wall Screening, and 
                    Delhi Stories. The film has received a 
                    positive response from the audience and 
                    has been reviewed with a rating of 6.9 by 
                    Shorted. It is a suspense drama about 
                    childhood sexual abuse and PTSD.
                    </p>
                </div>
            <div className = "">
                <img className = "h-48 w-3/12 inline-block ml-40 mt-14 mb-20 rounded-xl" src = {myImage2} alt = "Director" />
                <img className = "h-48 w-3/12 inline-block ml-8 mt-14 mb-20 rounded-xl" src = {myImage3} alt = "Director_Aesthetic"/>
                <img className = "h-48 w-3/12 inline-block ml-8 mt-14 mb-20 rounded-xl" src = {myImage4} alt = "Director_Aesthetic"/>
                </div>
            </div>
        )
    }
}

export default FilmPic;