import { appContainer } from "@/container";
import { IProductService } from "@/services/IProductService";
import { TYPES } from "@/types";
import { NextRequest, NextResponse } from "next/server";

var service: IProductService = appContainer.get<IProductService>(TYPES.ProductService);

export async function GET(req: NextRequest) {
    var categoryId = req.nextUrl.searchParams.get("categoryId");
    var pageSize = req.nextUrl.searchParams.get("pageSize");
    var pageNum = req.nextUrl.searchParams.get("pageNum");
    if(pageSize == undefined || pageNum == undefined)
        return NextResponse.error();
    if(categoryId == undefined) {
        var products = await service.getAll(parseInt(pageNum), parseInt(pageSize));
        return NextResponse.json(JSON.stringify(products));
    }
    var cat_products = await service.getByCategory(parseInt(categoryId), parseInt(pageNum), parseInt(pageSize));
    return NextResponse.json(JSON.stringify(cat_products));
}