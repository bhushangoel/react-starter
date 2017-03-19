import React, {Component} from 'react';
import videoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return <videoListItem key={video.etag} video={video} />
    });
    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )
};

// class VideoList extends Component {
//
//     render() {
//         return (
//             <ul className="col-md-4 list-group">
//                 <videoListItem />
//             </ul>
//         )
//     }
// }

export default VideoList;