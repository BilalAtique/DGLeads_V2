import {
    Scheduler,
    EventActions,
    ProcessedEvent,
    ViewEvent,
} from "@aldabil/react-scheduler";
import { useState } from 'react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

export default function Calendar() {
    const session = useSession();
    const supabase = useSupabaseClient();
    const [eventName, setEventName] = useState("");
    const [eventDescription, setEventDescription] = useState("");
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());


    const fetchRemote = async (query: ViewEvent): Promise<ProcessedEvent[]> => {
        const { data: events, error } = await supabase
            .from("events")
            .select()
            .gte("end", query.start)
            .lte("start", query.end);

        if (error) {
            console.error(error);
            return [];
        }

        return events.map((event) => ({
            event_id: event.id,
            title: event.title,
            start: new Date(event.start),
            end: new Date(event.end),
            description: event.description,
        }));
    };

    const handleConfirm = async (
        event: ProcessedEvent,
        action: EventActions
    ): Promise<ProcessedEvent> => {
        if (action === "edit") {
            const { data, error } = await supabase
                .from("events")
                .update({
                    title: event.title,
                    description: event.description,
                    start: event.start.toISOString(),
                    end: event.end.toISOString(),
                })
                .eq("id", event.event_id)
                .single();

            if (error) {
                console.error(error);
                return event;
            }

            return {
                ...event,
                title: data.title,
                description: data.description,
                start: new Date(data.start),
                end: new Date(data.end),
            };
        } if (action === "create") {
            const { data, error } = await supabase.from("events").insert({
                title: event.title,
                description: event.description,
                start: event.start.toISOString(),
                end: event.end.toISOString(),
            });

            if (error) {
                console.error(error);
                return event;
            }

            return {
                ...event,
                event_id: data[0].id,
                title: data[0].title,
                description: data[0].description,
                start: new Date(data[0].start),
                end: new Date(data[0].end),
            };
        }

        return event;
    };

    const handleDelete = async (deletedId: string): Promise<string> => {
        const { error } = await supabase
            .from("events")
            .delete()
            .eq("id", deletedId);

        if (error) {
            console.error(error);
            return deletedId;
        }

        return "";
    };

    return (
        <Scheduler
            getRemoteEvents={fetchRemote}
            onConfirm={handleConfirm}
            onDelete={handleDelete}
        />
    );
}
