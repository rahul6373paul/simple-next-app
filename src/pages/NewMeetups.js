import history from "../history";
import NewMeetupForm from "../components/layout/meetups/NewMeetupForm";

function NewMeetupPage(){

    function addMeetupHandler(meetupData) {
        fetch(
            "https://react-getting-started-15f45-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            
            ).then(() => {
                history.push('/');
            });
    }

    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
}

export default NewMeetupPage;