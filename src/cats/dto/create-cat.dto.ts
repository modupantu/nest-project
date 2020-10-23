import {IsInt,IsString} from 'class-validator'
export class CreateCatDto {
    @IsString()
    readonly name : string;
    @IsInt()
    readonly age : number;
    @IsString()
    readonly breed : string;
}
export class ListAllEntities {
    @IsInt()
    readonly limit:number;
}
export class UpdateCatDto {
    @IsString()
    readonly name:string;
}
