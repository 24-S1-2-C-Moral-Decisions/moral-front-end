import React, { useState, useEffect } from 'react';

const UrlCopyBox: React.FC = () => {
  const [currentUrl, setCurrentUrl] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      alert('Address has been copied!');
    }, (err) => {
      console.error('Copy error!', err);
    });
  };

  return (
    <>
    <div className='w-full flex items-center'>
    <div className="flex h-10 border rounded items-center">
    <img src="/imgs/icon _link.png" alt="link" className="w-4 justify-center ml-4 mr-2" />

      <input
        type="text"
        value={currentUrl}
        readOnly
        className="bg-[#F5F5F5] w-96 p-2 mr-2 h-9 "
      />
      <button
        onClick={handleCopy}
        className="bg-[#F5F5F5] text-white h-8 rounded-r"
      >
        <img src="/imgs/copy-btn.png" alt="copy" className="w-6 justify-center ml-2 mr-2" />

      </button>
    </div>
    </div>
    </>
  );
};

export default UrlCopyBox;