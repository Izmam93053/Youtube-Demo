import React from 'react'
import "./VideoCard.css"

const VideoCard = ({ video }) => {
    return (
        <div className="VideoCard cor">
            <img
                src={video.image}
                className=" card-image "
                alt={video.title}
            />
            <div className="card-body p-0 py-2 d-flex gap-2">
                <div className="">
                    <img
                        src={video.owner.profileImage}
                        className="image-a "
                        alt="image"
                    />
                </div>
                <div>
                    <p>
                        {video.title}
                    </p>
                </div>
            </div>
            <div>
                <p>{video.owner.name}</p>
                <p>
                    <span className='d-flex justify-content-between'>
                        {video.views} <span className="spa">.</span>{video.time}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default VideoCard
