import BlockInfo from 'UI/BlockInfo/BlockInfo';
import Button from 'UI/Button/Button';
import React from 'react'

interface Props{
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  myself?: string;
  iDid?: string;
  skills?: string;
}

function DetailedInfo({setActive, myself, iDid, skills}: Props) {
  return (
    <div>
            {myself && (
              <BlockInfo title="о себе" value={myself} />
            )}
            {iDid && (
              <BlockInfo title="чем занимался" value={iDid} />
            )}
            {skills && (
              <BlockInfo
                title="навыки"
                value={skills}
              />
            )}
            <Button
              type="button"
              stale="link"
              onClick={() => {
                setActive(false);
              }}
            >
              Скрыть подробную информацию
            </Button>
          </div>
  )
}

export default DetailedInfo