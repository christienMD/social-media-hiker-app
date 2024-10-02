import IconBox from "../IconBox";

interface CommentData {
  imgUrl: string;
  description: string;
}

const commentData: CommentData[] = [
  { imgUrl: "/images/image1.jpg", description: "world of mountains" },
  { imgUrl: "/images/image2.jpg", description: "Mountains" },
  { imgUrl: "/images/image3.jpg", description: "mountains calling in Places" },
  { imgUrl: "/images/image4.jpg", description: "Mountaineering" },
];

interface Props {
  className?: string;
}

const Comments = ({ className }: Props) => {
  return (
    <div className={`${className}`}>
      <h2 className="uppercase text-gray-400 my-3">Pages you like</h2>
      <div className="space-y-2">
        {commentData.map((comment, index) => (
          <div key={index} className="flex items-center space-x-2">
            <IconBox
              avatarUrl={comment.imgUrl}
              size="md"
              className="cursor-pointer"
            />
            <p className="text-white text-sm truncate hover:underline hover:cursor-pointer">{comment.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
