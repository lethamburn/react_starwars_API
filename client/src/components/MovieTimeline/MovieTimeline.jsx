import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Fade } from "react-awesome-reveal";

const MovieTimeline = () => {
  return (
    <>
      <Timeline position="alternate">
        <Fade triggerOnce cascade>
        <TimelineItem>
            <TimelineOppositeContent color="#f4ad0b">
              THE OLD REPUBLIC
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent></TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="#f4ad0b">
              THE HIGH REPUBLIC
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent></TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="#f4ad0bed">
              FALL OF THE JEDI
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>The Phantom Menace</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="#f4ad0b"></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Attack of the Clones</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="#f4ad0b"></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>The Clone Wars</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="#f4ad0b"></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Revenge of the Sith</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="#f4ad0b">
              REIGN OF THE EMPIRE
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>The Bad Batch</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="#f4ad0b"></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Solo: A Star Wars Story</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="#f4ad0b">
              AGE OF REBELLION
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Rebels</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="#f4ad0b"></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Rogue One: A Star Wars Story</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="#f4ad0b"></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>A New Hope</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="#f4ad0b"></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>The Empire Strikes Back</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="#f4ad0b"></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Return of the Jedi</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="#f4ad0b">
              THE NEW REPUBLIC
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>The Mandalorian</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="#f4ad0b">
              RISE OF THE FIRST ORDER
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Resistance</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="#f4ad0b"></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>The Force Awakens</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="#f4ad0b"></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>The Last Jedi</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="#f4ad0b"></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>The Rise of Skywalker</TimelineContent>
          </TimelineItem>
        </Fade>
      </Timeline>
    </>
  );
};

export default MovieTimeline;
