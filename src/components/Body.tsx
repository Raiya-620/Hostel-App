interface Props {
  imgs: string[];
}

function Body({ imgs }: Props) {
  return (
    <div className="flex-1">
      <div>
        <h1 className="font-bold text-3xl uppercase mb-4">ultimate hostel</h1>
        <img src={imgs[0]} alt="" className="mb-4" />
      </div>
      {/* list of images */}
      <div className="flex gap-x-2">
        {imgs.map((item) => (
          <img src={item} alt="" className="w-40" />
        ))}
      </div>
      <div>
        <h1 className="font-bold mt-2 mb-2">About this hostel</h1>
        <p>
          Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
          Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
          Blah Blah Blah Blah Blah Blah d Blah dhjkach kjk hvjhkqcbhajbcjhak
          bcjhklscdl j asjkcbakjlcbajkcljkacbcaklcbk jacklacba lkkj jk bkcjbl
          kcjbkcjbjk cdbjk lbvkadvkb kjb jkb kjcklabjk clbck jkbls djkbal kbjk
          bakjbkjabkjlbsd bjbjka mlkdaciuww cw lcb ajklcb jkabcjc kbkjllacb
          lsadkjbcj cb jklckj abc cjklbasklba lkkaa kjnkj vlsuicksl v vj lkjabjk
          djk bjksjkvbjvkj bjkavjkbjkb jkvjkblkbkj vb ajkbjk bvjklbsjkjbjk
        </p>
      </div>
    </div>
  );
}

export default Body;
