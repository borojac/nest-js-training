import { IsInt, Min } from "class-validator";

export class AddToCartDto {
    @IsInt()
    @Min(1)
    id: number;

    @IsInt()
    @Min(1)
    count: number;
}
