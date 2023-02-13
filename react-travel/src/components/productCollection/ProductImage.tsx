import React from "react";
import { Image, Typography } from "antd";
import { useNavigate, useLocation, useParams, useMatch, Link } from "react-router-dom";

interface PropsType {
    id: string | number;
    size: "large" | "small";
    imageSrc: string;
    price: number | string;
    title: string;
}

export const ProductImage: React.FC<PropsType> = ({id, size, imageSrc, price, title }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();
 // const match = useMatch();  路径匹配数据

    return (
    <Link to={`detail/${id}`}>
       {size=="large" ? (
        <Image src={imageSrc} height={285} width={490} />
       ) : (
        <Image src={imageSrc} height={120} width={240} />
       )}
       <div>
        <Typography.Text type="danger" strong> 
            From￥{price} 
        </Typography.Text>
        <Typography.Text type="secondary">
            {title.slice(0, 20)}
        </Typography.Text>
       </div>
    </Link>
    );
}