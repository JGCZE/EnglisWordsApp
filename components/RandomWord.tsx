interface IProps {
  word: string;
}

const RandomWord = ({ word }: IProps) => {
  return <div className="text-blue-500 font-bold text-2xl">{word}</div>;
};

export default RandomWord;
