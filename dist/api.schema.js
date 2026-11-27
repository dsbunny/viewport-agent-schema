// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
// `@type` field is optional for requests with no other required fields.
import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
import { ErrorResponseSchema } from "@dsbunny/error-schema";
export const ViewportAgentPingResponseSchema = z.object({
    ping: z.literal('pong'),
    timestamp: z.iso.datetime(),
}).register(dsbunnyRegistry, {
    id: 'ViewportAgentPingResponseSchema',
    description: 'Viewport Agent ping response schema',
});
export const GetScreenshotRequestSchema = z.object({
    '@type': z.literal('GetScreenshotRequest')
        .describe('Type of the get screenshot request'),
}).optional().register(dsbunnyRegistry, {
    id: 'GetScreenshotRequestSchema',
    description: 'Get screenshot request schema',
});
export const GetScreenshotResponseSchema = z.object({
    '@type': z.literal('GetScreenshotResponse')
        .describe('Type of the get screenshot response'),
    width: z.number()
        .describe('The width of the screenshot in pixels'),
    height: z.number()
        .describe('The height of the screenshot in pixels'),
    date: z.union([z.iso.date(), z.iso.datetime()])
        .describe('The date and time when the screenshot was taken'),
    uri: z.url()
        .describe('The data URI of the screenshot'),
}).register(dsbunnyRegistry, {
    id: 'GetScreenshotResponseSchema',
    description: 'Get screenshot response schema',
});
// #region API
export const ViewportAgentRequestSchema = z.union([
    GetScreenshotRequestSchema,
]).register(dsbunnyRegistry, {
    id: 'ViewportAgentRequestSchema',
    description: 'Viewport Agent request schema',
});
export const ViewportAgentResponseSchema = z.union([
    GetScreenshotResponseSchema,
    ErrorResponseSchema,
]).register(dsbunnyRegistry, {
    id: 'ViewportAgentResponseSchema',
    description: 'Viewport Agent response schema',
});
// #endregion
export const ViewportIdParamsSchema = z.object({ viewportId: z.string() }).register(dsbunnyRegistry, {
    id: 'ViewportIdParamsSchema',
    description: 'ViewportIdParams schema',
});
//# sourceMappingURL=api.schema.js.map