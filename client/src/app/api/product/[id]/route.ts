import { appContainer } from "@/container";
import { IProductService } from "@/services/IProductService";
import { TYPES } from "@/types";
// import { useParams } from "next/navigation"
import { NextRequest } from "next/server";

var service: IProductService = appContainer.get<IProductService>(TYPES.ProductService);

export async function GET(req: NextRequest) {
    // getStaticPaths();
    // var params = useParams();
    // return await service.getById(parseInt(params.id as string));
}