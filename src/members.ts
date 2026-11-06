import { GuildMember } from "@fluxerjs/core";

export function isCommunicationDisabled(member: GuildMember): boolean {
    return member.communicationDisabledUntil?.getTime()! > Date.now();
}
