// @flow strict
import { type Node } from 'react';
import Avatar from '../Avatar.js';
import { type BaseStackType } from './constants.js';
import HoverOverlay from './HoverOverlay.js';
import PositioningWrapper from './PositioningWrapper.js';

type Props = {|
  ...BaseStackType,
  index: number,
  name: string,
  src: string,
|};

export default function AvatarGroupCollaboratorAvatar({
  hovered,
  index,
  name,
  pileCount,
  size,
  src,
}: Props): Node {
  return (
    <PositioningWrapper index={index} pileCount={pileCount} size={size}>
      <HoverOverlay hovered={hovered} size={size}>
        <Avatar name={name} outline size={size} src={src} />
      </HoverOverlay>
    </PositioningWrapper>
  );
}
