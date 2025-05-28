export const UserMessageCard = ({ message }: { message: string }) => {
  return (
    <div className="flex justify-end m-4">
      <span className="bg-gray-300 dark:bg-[#27272A] rounded-xl text-right p-3 font-normal font-sans text-sm">
        {message}
      </span>
    </div>
  );
};
