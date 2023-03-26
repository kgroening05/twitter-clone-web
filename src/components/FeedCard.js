import './FeedCard.css'

export default function FeedCard({ body, author, id, profilePic }) {
  const profileDivStyles = {
    background: `center / contain no-repeat url(${profilePic})`,
  }

    return(
        <div className="tweet-card" key={id}>
          <div style={profileDivStyles} className="profile-pic" alt="" ></div>
          <div className="tweet-text">
            <p className='author'>{author}</p>
            <p className='tweet'>{body}</p>
          </div>
        </div>
    )
}