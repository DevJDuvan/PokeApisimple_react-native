package com.pex;

import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.media.MediaPlayer;
import android.net.Uri;
import android.os.IBinder;
import android.util.Log;
import android.widget.Toast;

import androidx.core.app.NotificationCompat;
// clase tipo servici para trabajo en segundo plano
public class toast extends Service {
// instancio clase manager
 private static ContactsManager manager;

String nombre = "";
// creo objeto tipo mediaplayer
public  static MediaPlayer reproductor;
// variables necesarias para notificaciones
 private  final static String  CHANNEL_ID ="NOTIFICACION";
 private  final  static  int NOFIFICACION_ID = 1;
// metodo para comunicar con clase manager
 public static void comunicacion(ContactsManager Mmanager){
  manager = Mmanager;
 }
 @Override
 public void onCreate() {
  super.onCreate();

 // stopSelf();
 }

 // inicialisa el servicio
 @Override
 public int onStartCommand(Intent intent, int flags, int startId) {
     // datos de  la ventana notificacion del servicio
  NotificationCompat.Builder noti = new NotificationCompat.Builder( this, CHANNEL_ID);
  noti.setSmallIcon(R.mipmap.ic_launcher);
  noti.setContentTitle("musica");
  noti.setContentText("reproduciendo musica");
  noti.setPriority(NotificationCompat.PRIORITY_DEFAULT);
  noti.setColor(Color.BLUE);
  System.out.println(manager.ubica);
  startForeground(1,noti.build());
  // inicio el objeto meadia player
     reproductor = MediaPlayer.create(this , Uri.parse(manager.ubica));
     int duracionCancion = reproductor.getDuration();
     // paso datos a clase manager con metodo de la misa
     manager.setModuleParams(nombre,duracionCancion );
     reproductor.setLooping(true);  // vuelva a sonar
     reproductor.setVolume(100,100);
     reproductor.start();
  System.out.println("----------------------------"+duracionCancion);
  Log.d("MyApp", String.valueOf(duracionCancion));
  return Service.START_STICKY;
 }

 public void informacionCancion(){



 }

 private void mostrartoast() {
  if (manager != null) {

  }
  Toast.makeText(getBaseContext(),"modulos nativos",Toast.LENGTH_SHORT).show();

 }
 // metodo para pausar reproduccion del objeto mediaplayer
 public static void pausarCancion(String m){
     reproductor.pause();
     Log.i("med",m);
    }
    // metodo para cambiar de cancion  ! detengo y dejo null el objeto mediaplayer
    //y despues le paso un nuevo directorio de cancion
public static  void cambioCancion(Context context){
     System.out.println("no null 2");
    reproductor.stop();
    reproductor.release();
    reproductor = null;
    reproductor = MediaPlayer.create(context, Uri.parse(manager.ubica));
    int duracionCancion = reproductor.getDuration();
    manager.setModuleParams("true",duracionCancion );
    reproductor.setVolume(100,100);
    reproductor.start();

}


// metodo para acabar con el servicio
 public static void cancelar() {
  if (manager != null) {
   reproductor.stop();
   reproductor.release();
   reproductor = null;
   manager.removeServiceReference();

  }

 }

 @Override
 public IBinder onBind(Intent intent) {
  return null;
 }


}