import React from "react";

interface Props {
  params: { id: number; photoid: number };
}

const PhotoDetail = ({ params: { id, photoid } }: Props) => {
  return (
    <div>
      PhotoDetail {id} {photoid}
    </div>
  );
};

export default PhotoDetail;
