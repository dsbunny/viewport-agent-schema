import * as z from "zod";
export declare const ViewportAgentWebhookClassSchema: z.ZodEnum<{
    viewport: "viewport";
}>;
export type ViewportAgentWebhookClass = z.infer<typeof ViewportAgentWebhookClassSchema>;
export declare const ViewportAgentWebhookTypeSchema: z.ZodEnum<{
    new: "new";
    change: "change";
}>;
export type ViewportAgentWebhookType = z.infer<typeof ViewportAgentWebhookTypeSchema>;
export declare const ViewportAgentWebhookRequestSchema: z.ZodObject<{
    tenant_id: z.ZodUUID;
    ref_id: z.ZodUUID;
    trace_id: z.ZodOptional<z.ZodString>;
    '@type': z.ZodLiteral<"ViewportAgentWebhookRequest">;
    class: z.ZodEnum<{
        viewport: "viewport";
    }>;
    type: z.ZodEnum<{
        new: "new";
        change: "change";
    }>;
}, z.core.$strip>;
export type ViewportAgentWebhookRequest = z.infer<typeof ViewportAgentWebhookRequestSchema>;
export declare const ViewportAgentWebhookProgressSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"ViewportAgentWebhookProgress">;
}, z.core.$strip>;
export type ViewportAgentWebhookProgress = z.infer<typeof ViewportAgentWebhookProgressSchema>;
export declare const ViewportAgentWebhookResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"ViewportAgentWebhookResponse">;
}, z.core.$strip>;
export type ViewportAgentWebhookResponse = z.infer<typeof ViewportAgentWebhookResponseSchema>;
//# sourceMappingURL=webhook.schema.d.ts.map