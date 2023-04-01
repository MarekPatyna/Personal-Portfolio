import styled from "styled-components"
import { colors } from "../styled/Global"

export const Container = styled.div`
  text-align: center;
  margin-top: 0.9375rem;
  margin-bottom: 0.9375rem;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 0.6875rem;
  span {
    color: ${colors.mainColorAccent};
  }
`