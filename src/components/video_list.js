import React, {Component} from 'react';

// const VideoList = (props) => {
//
//     return (
//         <ul className="col-md-4 list-group">
//             {props.videos.length}
//         </ul>
//     )
// };

class VideoList extends Component {
    render() {
        return (
            <ul className="col-md-4 list-group">
                {this.props.videos.length}
            </ul>
        )
    }
}

export default VideoList;