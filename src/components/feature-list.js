import React, { useState } from "react"
import { graphql } from "gatsby"
import {
  Container,
  Box,
  Kicker,
  Heading,
  Text,
  Pill,
  FlexList,
  Space,
} from "./ui"
import Feature from "./feature"

export default function FeatureList(props) {
  const [state, setState] = useState({ selectedIndex: 0 })
  return (
    <Container>
      <Box background="white" radius="large" shadow="primary">
        <Space size={5} />
        <Container>
          <Box center>
            <Heading>
              {props.kicker && <Kicker>{props.kicker}</Kicker>}
              {props.heading}
            </Heading>
            {props.text && <Text>{props.text}</Text>}
            <FlexList gap={1}>
              {props.content.map((feature, i) => (
                <Pill
                  key={feature.id}
                  variant={
                    state.selectedIndex === i ? "selected" : "unselected"
                  }
                  onClick={() => setState({ selectedIndex: i })}
                  heading={feature.heading}
                />
              ))}
            </FlexList>
          </Box>
        </Container>
        <Feature {...props.content[state.selectedIndex]} flip={false} />
      </Box>
    </Container>
  )
}

export const query = graphql`
  fragment HomepageFeatureListContent on HomepageFeatureList {
    id
    kicker
    heading
    text
    content {
      id
      ...HomepageFeatureContent
    }
  }
`
