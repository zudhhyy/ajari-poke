import { FC } from "react";
import Link from "next/link";

type PaginationControlsProps = {
    currentPage: number;
};

const PaginationControls: FC<PaginationControlsProps> = ({ currentPage }) => {
    const prevPage = currentPage > 1 ? currentPage - 1 : null;
    const nextPage = currentPage + 1;

    return (
        <div className="mt-8 flex justify-center space-x-4">
            {prevPage && (
                <Link href={`/?page=${prevPage}`}>
                    <p className="rounded-md bg-blue-500 px-4 py-2 text-white">Previous</p>
                </Link>
            )}
            <Link href={`/?page=${nextPage}`}>
                <p className="rounded-md bg-blue-500 px-4 py-2 text-white">Next</p>
            </Link>
        </div>
    );
};

export default PaginationControls;
