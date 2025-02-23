import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { BabylonLoader } from '../../components/BabylonLoader';
import { CssLoader } from '../../components/CssLoader';
import { GemItemCard } from '../../components/GemItemCard/GemItemCard';
import Image from 'next/image';
import classNames from 'classnames';
import useGem, { INft } from '../../hooks/useGem';
import { useAuth } from '../../hooks/useAuth';
import { useReferral } from '../../hooks/useReferral';

const Labs = () => {
  const { mergeGem, successMergeGem, getGemList, reset } = useGem();
  const { isAuthorized, address } = useAuth();
  const { isReferral } = useReferral();
  const [loader, setLoader] = useState<boolean>(true);
  const [userGems, setUserGems] = useState<INft[]>([]);
  const [selectedGems, setSelectedGems] = useState<
    [string | null, string | null]
  >([null, null]);

  const refreshGems = async () => {
    setLoader(true);
    const gems = await getGemList?.();
    gems && setUserGems(gems);
    setLoader(false);
  };

  const handleSelectGem = (tokenId: string) => () => {
    if (selectedGems[0] == tokenId) {
      selectedGems[0] = null;
    } else if (selectedGems[1] == tokenId) {
      selectedGems[1] = null;
    } else if (selectedGems[0] == null) {
      selectedGems[0] = tokenId;
    } else if (selectedGems[0] != null) {
      selectedGems[1] = tokenId;
    }
    setSelectedGems([selectedGems[0], selectedGems[1]]);
  };

  const handleCraft = async () => {
    if (!selectedGems[0] || !selectedGems[1]) return;
    setLoader(true);
    let price = 0.0005;
    const referal = address && (await isReferral(address));
    if (referal) {
      price = 0.000475;
    }
    await mergeGem?.(selectedGems[0], selectedGems[1], price);
    setSelectedGems([null, null]);
  };

  useEffect(() => {
    if (reset) {
      setSelectedGems([null, null]);
      setLoader(false);
    }
  }, [reset]);

  useEffect(() => {
    if (!successMergeGem) return;
    refreshGems();
  }, [successMergeGem]);

  useEffect(() => {
    if (isAuthorized && !!getGemList) {
      refreshGems();
    }
  }, [isAuthorized, !!getGemList]);

  if (reset) return <></>;
  if (!isAuthorized) return <BabylonLoader isConnected={false} />;

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-8 items-center pt-24">
        <div className="flex lg:block lg:basis-36 shrink-0 gap-8">
          <div
            className="flex items-center justify-center border border-white border-opacity-20 rounded-2xl w-36 h-36 mb-3 backdrop-blur-lg"
            style={{
              background:
                'linear-gradient(105.54deg,hsla(0,0%,100%,.45),hsla(0,0%,100%,.15))',
            }}
          >
            {selectedGems[0] !== null ? (
              <Image
                width={80}
                height={80}
                src={`/resources/assets/gems/${
                  userGems.find((u) => u.tokenId == selectedGems[0])?.image
                }`}
                alt="gem0"
              />
            ) : (
              <div className="flex items-center justify-center pb-1 border border-white opacity-20 w-10 h-10 font-bold rounded-full text-white">
                +
              </div>
            )}
          </div>
          <div
            className="flex items-center justify-center border border-white border-opacity-20 rounded-2xl w-36 h-36 backdrop-blur-lg"
            style={{
              background:
                'linear-gradient(105.54deg,hsla(0,0%,100%,.45),hsla(0,0%,100%,.15))',
            }}
          >
            {selectedGems[1] !== null ? (
              <Image
                width={80}
                height={80}
                src={`/resources/assets/gems/${
                  userGems.find((u) => u.tokenId == selectedGems[1])?.image
                }`}
                alt="gem1"
              />
            ) : (
              <div className="flex items-center justify-center pb-1 border border-white opacity-20 w-10 h-10 font-bold rounded-full text-white">
                +
              </div>
            )}
          </div>
        </div>
        <div className="w-full">
          <div
            className="border border-white border-opacity-20 rounded-3xl mb-6"
            style={{
              background:
                'linear-gradient(90.66deg,hsla(0,0%,100%,.3) .57%,hsla(0,0%,100%,.1) 99.48%',
            }}
          >
            <div className="flex items-center border-b border-white border-opacity-20 px-4">
              <div className="basis-1/2 p-4 text-center font-semibold text-white text-opacity-50 uppercase">
                Info
              </div>
              <div className="relative basis-1/2 py-4 text-center font-semibold text-white text-opacity-50 uppercase">
                Items
                <div className="absolute h-px w-full bottom-0 left-0 bg-white"></div>
              </div>
            </div>
            <div className="flex items-center justify-center min-h-96 overflow-y-auto">
              {loader ? (
                <CssLoader />
              ) : userGems.length === 0 ? (
                <div className="text-white">You have not gems yet</div>
              ) : (
                <div className="grid grid-cols-12 md:grid-cols-10 gap-2.5 p-1.5 w-full h-fit self-start">
                  {userGems.map((gem) => (
                    <div
                      className="col-span-full xs:col-span-6 sm:col-span-3 md:col-span-2"
                      key={gem.tokenId}
                    >
                      <GemItemCard
                        id={gem.tokenId}
                        onClick={handleSelectGem(gem.tokenId)}
                        imageURL={`/resources/assets/gems/${gem.image}`}
                        isActive={selectedGems.includes(gem.tokenId)}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="text-right">
            <div className="flex" style={{ maxWidth: '780px' }}>
              <div className="w-full">
                <button
                  className={classNames(
                    {
                      'pointer-events-auto':
                        !selectedGems.includes(null) &&
                        userGems.find((g) => g.tokenId == selectedGems[0])
                          ?.image ==
                          userGems.find((g) => g.tokenId == selectedGems[1])
                            ?.image,
                    },
                    'pointer-events-none flex items-center justify-center p-5 gap-2 rounded-xl w-full font-bold uppercase text-white border border-white border-opacity-50 transition-all'
                  )}
                  style={{
                    background:
                      !selectedGems.includes(null) &&
                      userGems.find((g) => g.tokenId == selectedGems[0])
                        ?.image ==
                        userGems.find((g) => g.tokenId == selectedGems[1])
                          ?.image
                        ? 'linear-gradient(105.54deg,#594b8f,#6b6198)'
                        : 'linear-gradient(105.54deg,hsla(0,0%,100%,.3),hsla(0,0%,100%,.1))',
                  }}
                  onClick={handleCraft}
                >
                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 21V16M4 6V1M1.5 3.5H6.5M1.5 18.5H6.5M12.5 2L10.7658 6.50886C10.4838 7.24209 10.3428 7.60871 10.1235 7.91709C9.92919 8.1904 9.6904 8.42919 9.41709 8.62353C9.10871 8.84281 8.74209 8.98381 8.00886 9.26582L3.5 11L8.00886 12.7342C8.74209 13.0162 9.10871 13.1572 9.41709 13.3765C9.6904 13.5708 9.92919 13.8096 10.1235 14.0829C10.3428 14.3913 10.4838 14.7579 10.7658 15.4911L12.5 20L14.2342 15.4911C14.5162 14.7579 14.6572 14.3913 14.8765 14.0829C15.0708 13.8096 15.3096 13.5708 15.5829 13.3765C15.8913 13.1572 16.2579 13.0162 16.9911 12.7342L21.5 11L16.9911 9.26582C16.2579 8.98381 15.8913 8.8428 15.5829 8.62353C15.3096 8.42919 15.0708 8.1904 14.8765 7.91709C14.6572 7.60871 14.5162 7.24209 14.2342 6.50886L12.5 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  Craft
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Labs.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;
export default Labs;
