const isSessionEstablished = async () => {
  const sessionInfo = await fetch('/checksession');
  const sessionData = await sessionInfo.json();
  return sessionData;
}