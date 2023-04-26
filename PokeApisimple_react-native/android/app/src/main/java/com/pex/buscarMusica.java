package com.pex;

import android.content.Context;
import android.content.Intent;
import android.media.MediaPlayer;
import android.util.Log;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;



public class buscarMusica extends ReactContextBaseJavaModule {
    public Context mContext;
    public  Context contextoapp = getReactApplicationContext();
    private Intent mService;
    public  static MediaPlayer reproductor;

    public buscarMusica(ReactApplicationContext contexto) {
        super(contexto);
        mContext = contexto;

    }


    @Override
    public String getName() {
        return "buscarMusica";
    }

    @ReactMethod
    public void saludo(Promise promesa) {
        try {
            System.out.print(mContext.getFilesDir().getAbsolutePath());
            File directory = new File("/");
            String ruta = directory.getPath();
            System.out.println(directory.isDirectory());
            File[] files = directory.listFiles();
            Log.d("Files", "Size: " + files.length);
            for (int i = 0; i < files.length; i++) {
                Log.d("Files", "FileName:" + files[i].getName());
            }
        } catch (Exception e) {
            promesa.reject("Create Event Error", e);
        }
    }







    @ReactMethod
    public void react(ReadableArray readableArray, ReadableMap readableMap, Callback callback) throws IOException {
        int[] intArray = new int[]{ 1,2,3,4,5,6,7,8,9,10};
        ArrayList<Object> arrayLista = new ArrayList<>();
        for (int i=0; i< intArray.length; ++i){
            arrayLista.add(intArray[i]);
        }

        System.out.println(arrayLista.get(0));
        WritableArray writableArrayy = Arguments.createArray();
        for(Object obj : arrayLista){
            writableArrayy.pushString( ""+ obj);
        }


        ArrayList<Object> arrayList = readableArray.toArrayList();
       System.out.println("-------posicion 1:"+ arrayList.get(0));
        HashMap<String, Object> map = new HashMap<>();
        map.put("carpeta",1);
        map.put("mascosas","otro");

        System.out.println("++++++++primer valor del objeto file "+map.get("mascosas"));
        ArrayList<String> test1 = new ArrayList<String>();
        test1.add("nombre2");
        test1.add("duracion2");
        test1.add("otro3");

        WritableMap writableMap = Arguments.createMap();
        for (String key : map.keySet()) {
            writableMap.putString(key, "" + map.get(key));
        }



        map.put("carpeta",1);
        map.put("mascosas","otro");

        callback.invoke(writableArrayy);
    }





    @ReactMethod
    private void buscacanciones(Callback callback) throws IOException {
        WritableArray audioTracks = Arguments.createArray();
        ArrayList<File> arrayList = new ArrayList<>();
        try{
            //creo obejto tipo file con direccion raiz de la memoria interna
            File carpeta = new File("/storage/emulated/0/");
            File[] lista = carpeta.listFiles();

                //recorremos la lista de objetos tipo file
                for (int i = 0; i < lista.length; i++) {
                    if (lista != null ) {
                    // verificamos si es una carpeta
                    if (lista[i].isDirectory()) {
                        System.out.println("-------------aqui llega a entrar a buscar en sub carpeta"+lista[i].getName());
                        // llamamos al metodo hijo que recibe un objeto tipo file y con ello recorremos carpetas
                        ArrayList<File> recibe = hijo(lista[i]);
                        if (recibe.size()!=0){
                for  (int o=0; o<recibe.size();o++){
                    System.out.println("lo que se recibe"+recibe.get(o));
                    arrayList.add(recibe.get(o));

                }}else{System.out.println("no recibe");}

System.out.println(arrayList.size());

                    } else {
                        // si no es carpeta verificamos si es mp3
                        if(lista[i].getName().endsWith("mp3") || lista[i].getName().endsWith("MP3")) {
                            // si es mp3 creamos un map y e agregamos atributos
                            System.out.println("agregados de la raiz"+lista[i].getName());
                            System.out.println("ubicacion agregados de la raiz"+lista[i].getPath());
                           arrayList.add(lista[i]);
                        }

                    }

                }  // si es una directrio vacio o nulo
                    else{System.out.println("vacia o nula 2");}
                // termina el bucle for

            }

            System.out.println("terminado");
        }catch (Exception a) {
            System.out.println ("El error es: " + a.getMessage());
            a.printStackTrace();
        }
        for (int i = 0; i < arrayList.size(); ++i) {
            WritableMap audioTrack = Arguments.createMap();
            audioTrack.putString("titulo", arrayList.get(i).getName());
            audioTrack.putString("artista", arrayList.get(i).getPath());
            // agregar el mapa a array de mapas o objetos
            System.out.println(audioTrack);
            audioTracks.pushMap(audioTrack);
        }
        // devolvemos el array con mapas o objetos
        callback.invoke(audioTracks);
}
// recursividad para recorrer carpetas
    public ArrayList<File> hijo(File arch){
        ArrayList<File> arrayLista = new ArrayList<>();

// recibe un objeto tipo archivo
        System.out.println("nombre carpeta hijo"+arch.getPath());
      try {
          // listamos su contenido ya que es carpeta
          File[] lista = arch.listFiles();

System.out.println("--------------------tamaño carpeta hijo"+lista.length);

            // recorremos la carpeta
            for (int i = 0; i < lista.length; i++) {
                if (lista.length>0 ) {
// si el archivo es mp3 creamos un mapa y le agregamos datos
                System.out.println("ver todos los archivos que "+lista[0].getName());
                if(lista[i].isDirectory()) {

                    System.out.println("-------------dirrecion  hijo"+lista[i].getPath());
                    System.out.println("carpeta hijo"+lista[i].getName());
                    ArrayList<File> recibe = hijo(lista[i]);
                    if (recibe.size()!=0){
                        for  (int o=0; o<recibe.size();o++){
                            arrayLista.add(recibe.get(o));
                            System.out.println("lo que se recibe"+recibe.get(o));


                        }}else{System.out.println("no recibe");}
                }
                 else {
                    // si no era mp3 verificamos si es directorio y le asignamos un objeto tipo file
                    // para volver a llamar a hijo y volver a recorrerlo
                    if (lista[i].getName().endsWith("mp3") || lista[i].getName().endsWith("MP3")) {
      arrayLista.add(lista[i]);
                        System.out.println("se agrego"+lista[i].getName());
// agregamos el objeto al arrays de mapas o objetos

                    }
                 }
            } else{System.out.println("vacia o nula");}

        }

        } catch (Exception e) {
            System.out.println("El error es: " + e.getMessage());
            e.printStackTrace();

        }
        System.out.println("tamaño de lo que devuelve hijo"+arrayLista.size());
      return  arrayLista;


    }
    @ReactMethod
    private WritableArray getAudioTrackInfo(ArrayList canciones) {

        WritableArray audioTracks = Arguments.createArray();
        for (int i = 0; i < canciones.size(); ++i) {
File cancion = (File) canciones.get(i);
            WritableMap audioTrack = Arguments.createMap();
           // audioTrack.putString("title", canciones.get(i));
            audioTrack.putString("type", "regue");
            audioTrack.putString("language",  "jamaica");
            audioTrack.putString("bitrate", "free");


            audioTracks.pushMap(audioTrack);
        }
        return audioTracks;
    }


      }

    

