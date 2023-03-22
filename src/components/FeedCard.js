
export default function FeedCard({ body, author, id, profilePic }) {
    return(
        <div className="tweet-card" key={id}>
          <p>{author}</p>
          <p>{body}</p>
          <img src={profilePic} alt="" />
        </div>
    )
}