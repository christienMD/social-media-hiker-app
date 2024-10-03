import { formatTime } from "@/lib/utils";

interface NewsItem {
  imgUrl: string;
  description: string;
  time: string;
}

interface Props {
  news: NewsItem[];
}

const NewsCard= ({ news }: Props) => {
  return (
    <div className="bg-social-bg p-4 rounded-md">
      <h2 className="text-xl font-semibold mb-4">Today's news</h2>
      <div className="space-y-4">
        {news.map((item, index) => (
          <div key={index} className="flex flex-col">
            <img
              src={item.imgUrl}
              alt={item.description}
              className="w-full h-32 object-cover rounded-md mb-2"
            />
            <div className="flex justify-between items-start">
              <p className="text-xs">{item.description}</p>
              <span className="text-xs text-gray-400">
                {formatTime(item.time)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCard;
