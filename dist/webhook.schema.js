// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { WebhookProgressSchema, WebhookRequestSchema, WebhookResponseSchema, } from "@dsbunny/webhook-schema";
export const ViewportAgentWebhookClassSchema = z.enum(['viewport'])
    .describe('The class of the webhook event related to viewport-agent operations');
export const ViewportAgentWebhookTypeSchema = z.enum(['new', 'change',])
    .describe('The type of the webhook event related to viewport-agent operations');
export const ViewportAgentWebhookRequestSchema = WebhookRequestSchema.extend({
    '@type': z.literal('ViewportAgentWebhookRequest')
        .describe('Type of the viewport agent webhook request'),
    class: ViewportAgentWebhookClassSchema,
    type: ViewportAgentWebhookTypeSchema,
})
    .describe('The schema for webhook requests sent by the ViewportAgent');
export const ViewportAgentWebhookProgressSchema = WebhookProgressSchema.extend({
    '@type': z.literal('ViewportAgentWebhookProgress')
        .describe('Type of the viewport agent webhook progress'),
})
    .describe('The schema for webhook progress events sent by the ViewportAgent');
export const ViewportAgentWebhookResponseSchema = WebhookResponseSchema.extend({
    '@type': z.literal('ViewportAgentWebhookResponse')
        .describe('Type of the viewport agent webhook response'),
})
    .describe('The schema for webhook responses sent by the ViewportAgent');
//# sourceMappingURL=webhook.schema.js.map