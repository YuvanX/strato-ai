export const RecentPage = ({
  image,
  title,
  content,
  date,
}: {
  image: string;
  title: string;
  content: string;
  date: string;
}) => {
  return (
    <div className="max-w-sm mx-4 my-2 bg-white text-black dark:bg-black dark:text-white rounded-t-xl rounded-b-xl overflow-hidden shadow-lg border ">
        <div className="relative">
            <div>
            <img
                src={image}
                alt="Product Image"
                className="h-48 w-full object-cover"
            />
            <span className="absolute top-3 left-3 bg-green-900 text-green-400 font-semibold text-xs px-2 rounded-full py-1">
                Published
            </span>
            <button className="absolute top-3 right-3 text-white">
                &#x22EE;
            </button>
            </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold">
            {title}
        </h3>
        <div className="text-gray-400 text-sm mt-1">
            {content}
        </div>
        <div className="text-xs mt-2 text-gray-500">
            {date}
        </div>
      </div>
    </div>
  );
};
