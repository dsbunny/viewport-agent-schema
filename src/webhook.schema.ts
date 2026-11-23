// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";
import {
        WebhookProgressSchema,
        WebhookRequestSchema,
        WebhookResponseSchema,
} from "@dsbunny/webhook-schema";

export const ViewportAgentWebhookClassSchema = z.enum(['viewport'])
        .describe('The class of the webhook event related to viewport-agent operations');
export type ViewportAgentWebhookClass = z.infer<typeof ViewportAgentWebhookClassSchema>;

export const ViewportAgentWebhookTypeSchema = z.enum(['new', 'change',])
        .describe('The type of the webhook event related to viewport-agent operations');
export type ViewportAgentWebhookType = z.infer<typeof ViewportAgentWebhookTypeSchema>;

export const ViewportAgentWebhookRequestSchema = WebhookRequestSchema.extend({
        '@type': z.literal('ViewportAgentWebhookRequest')
                .describe('Type of the viewport agent webhook request'),
        class: ViewportAgentWebhookClassSchema,
        type: ViewportAgentWebhookTypeSchema,
})
        .describe('The schema for webhook requests sent by the ViewportAgent');
export type ViewportAgentWebhookRequest = z.infer<typeof ViewportAgentWebhookRequestSchema>;

export const ViewportAgentWebhookProgressSchema = WebhookProgressSchema.extend({
        '@type': z.literal('ViewportAgentWebhookProgress')
                .describe('Type of the viewport agent webhook progress'),
})
        .describe('The schema for webhook progress events sent by the ViewportAgent');
export type ViewportAgentWebhookProgress = z.infer<typeof ViewportAgentWebhookProgressSchema>;

export const ViewportAgentWebhookResponseSchema = WebhookResponseSchema.extend({
        '@type': z.literal('ViewportAgentWebhookResponse')
                .describe('Type of the viewport agent webhook response'),
})
        .describe('The schema for webhook responses sent by the ViewportAgent');
export type ViewportAgentWebhookResponse = z.infer<typeof ViewportAgentWebhookResponseSchema>;
