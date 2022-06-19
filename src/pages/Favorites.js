import { useContext } from "react";
import MeetupItem from "../components/layout/meetups/MeetupItem";
import MeetupList from "../components/layout/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";

function FavoritesPage(){

    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if(favoritesCtx.totalFavorites === 0){
        content = <p>You got no favourites yet. Start adding some?</p>
    }else{
        console.log(favoritesCtx.favorites)
        content = <MeetupList meetups={favoritesCtx.favorites} />
    }

    return <section>
        <h1>My Favorites</h1>
            {content}     
        </section>
}

export default FavoritesPage;