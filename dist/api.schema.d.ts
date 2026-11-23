import * as z from "zod";
export declare const GetScreenshotRequestSchema: z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"GetScreenshotRequest">;
}, z.core.$strip>>;
export type GetScreenshotRequest = z.infer<typeof GetScreenshotRequestSchema>;
export declare const GetScreenshotResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"GetScreenshotResponse">;
    width: z.ZodNumber;
    height: z.ZodNumber;
    date: z.ZodUnion<readonly [z.ZodISODate, z.ZodISODateTime]>;
    uri: z.ZodURL;
}, z.core.$strip>;
export type GetScreenshotResponse = z.infer<typeof GetScreenshotResponseSchema>;
export declare const ViewportAgentRequestSchema: z.ZodUnion<readonly [z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"GetScreenshotRequest">;
}, z.core.$strip>>]>;
export type ViewportAgentRequest = z.infer<typeof ViewportAgentRequestSchema>;
export declare const ViewportAgentResponseSchema: z.ZodUnion<readonly [z.ZodObject<{
    '@type': z.ZodLiteral<"GetScreenshotResponse">;
    width: z.ZodNumber;
    height: z.ZodNumber;
    date: z.ZodUnion<readonly [z.ZodISODate, z.ZodISODateTime]>;
    uri: z.ZodURL;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"ErrorResponse">;
    code: z.ZodString;
    message: z.ZodString;
    detail: z.ZodString;
    timestamp: z.ZodISODateTime;
}, z.core.$strip>]>;
export type ViewportAgentResponse = z.infer<typeof ViewportAgentResponseSchema>;
export declare const ViewportIdParamsSchema: z.ZodObject<{
    viewportId: z.ZodString;
}, z.core.$strip>;
export type ViewportIdParams = z.infer<typeof ViewportIdParamsSchema>;
//# sourceMappingURL=api.schema.d.ts.map