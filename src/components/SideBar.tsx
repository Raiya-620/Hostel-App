interface Props {
  name: string;
  location: string;
  img: string;
  heading?: string;
}

function SideBarComponent({ name, location, img, heading }: Props) {
  return (
    <>
      <div className=" w-96">
        <h1 className="font-semibold text-2xl mb-4">{heading}</h1>
        <img src={img} alt="hostel image" />
        <p>{name}</p>
        <p>{location}</p>
      </div>
    </>
  );
}

export default SideBarComponent;
