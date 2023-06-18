package logs

import "fmt"

func LogErr(err error)  {
	if err != nil {
		fmt.Println(err.Error())
		LogStr(err.Error())
	}
}
func LogStr(mess string)  {
	fmt.Println(mess)
	//defer slog.MustFlush()
	//h1 := handler.MustFileHandler("connectxone.logs", handler.WithLogLevels(slog.DangerLevels))
	//slog.PushHandler(h1)
	//slog.Error(mess)
}
