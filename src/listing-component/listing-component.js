import React from 'react';
import ListItem from '../list-item/list-item.component'

class Listing extends React.Component { 
    constructor(props) {
        super(props);
    
        this.state = {
          posts: []
        };
      }

    fetchFromServer =
        new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            const url = "http://stawka.api.v3.tvp.pl/shared/listing.php?parent_id=5351128&dump=json&direct=false&count=-1";
            xhr.open("GET", url);
            xhr.onload = () => resolve(xhr.responseText);
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send();
        });
    

    createArray = this.fetchFromServer.then((responseText) => {
        const posts = JSON.parse(responseText).items;
        this.setState({posts});
    });   

    
    render() {
        return (
            <div>
               {this.state.posts.map((post) => {
                  return <ListItem key={post._id} title={post.title} lead={post.lead} alt={post.web_name} url={post.url}/>
               })} 
            </div>
        )
    }
}

export default Listing;