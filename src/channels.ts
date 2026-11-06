import type { TextBasedChannel } from "@fluxerjs/core";

export type GuildTextBasedChannel = Extract<TextBasedChannel, { guildId: any }>;
