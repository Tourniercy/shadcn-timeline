import {
  Timeline,
  TimelineItem,
  TimelineTitle,
  TimelineDescription,
  TimelineTime,
  TimelineHeader,
} from "@/components/timeline-new-tailwind";

export const TimelineLayout = () => {
  return (
    <>
      <div>
        <Timeline>
          <TimelineItem>
            <TimelineHeader>
              <TimelineTime>Test</TimelineTime>
              <TimelineTitle>123345</TimelineTitle>
            </TimelineHeader>
            <TimelineDescription>123345</TimelineDescription>
          </TimelineItem>
        </Timeline>
        <Timeline>
          <TimelineItem>
            <TimelineHeader>
              <TimelineTime>Test</TimelineTime>
              <TimelineTitle>123345</TimelineTitle>
            </TimelineHeader>
            <TimelineDescription>123345</TimelineDescription>
          </TimelineItem>
        </Timeline>
      </div>
    </>
  );
};
