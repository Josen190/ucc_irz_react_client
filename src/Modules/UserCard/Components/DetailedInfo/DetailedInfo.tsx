import BlockInfo from 'UI/BlockInfo/BlockInfo';
import Button from 'UI/Button/Button';
import React from 'react'

interface Props{
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  myself?: string;
  iDid?: string;
  achievements?: string;
  skillsAndCompetencies?: string;
}

function DetailedInfo({setActive, myself, iDid, achievements, skillsAndCompetencies}: Props) {
  return (
    <div>
            {myself && (
              <BlockInfo title="о себе" value={myself} />
            )}
            {iDid && (
              <BlockInfo title="чем занимался" value={iDid} />
            )}
            {achievements && (
              <BlockInfo title="достижения" value={achievements} />
            )}
            {skillsAndCompetencies && (
              <BlockInfo
                title="навыки и компетенции"
                value={skillsAndCompetencies}
              />
            )}
            <Button
              type="button"
              stale="link"
              onClick={() => {
                setActive(false);
              }}
            >
              Скрыть подробную инфромацию
            </Button>
          </div>
  )
}

export default DetailedInfo