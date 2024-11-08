import { FC } from "react";
import Image from "next/image";

import LoadingImg from "@/assets/images/loading.png";

const Loading: FC = () => {
    return (
        <div className="flex h-screen items-center justify-center">
            <Image alt="loading..." src={LoadingImg} className="h-20 w-20 animate-spin" />
        </div>
    );
};

export default Loading;
