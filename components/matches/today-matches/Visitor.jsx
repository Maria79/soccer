import Image from "next/image";

export const Visitor = ({ team, shield }) => {
  return (
    <div className="flex gap-x-2 items-center">
      <div>
        <Image src={shield} alt={team} width={20} height={20} />
      </div>
      <div>{team}</div>
    </div>
  );
};
