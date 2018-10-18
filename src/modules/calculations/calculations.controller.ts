import {add} from "./calculations.model";
import {Context} from "koa";

export const addition = (ctx: Context): Promise<any> => {
    ctx.body = {
        result: add(+ctx.request.query.number1, +ctx.request.query.number2)
    };
    return;
};

export const logger = async (ctx: Context, next: () => Promise<any>) => {
    await log(ctx.request.query);
    return next();
};

const log = (data: any) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('Data: ', data);
            resolve();
        }, 1000);

    });
};
