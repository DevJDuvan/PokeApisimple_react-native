package com.pex;

import android.content.Context;
import android.content.Intent;
import android.os.Environment;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class ContactsManager extends ReactContextBaseJavaModule {

    public Context mContext;
    private Intent mService;
    private String mConnected = null;
    public String ubica = null;
    private int mName;
    private static toast Toast;

    public ContactsManager(ReactApplicationContext contexto) {
        super(contexto);
        mContext = contexto;
        Toast.comunicacion(this);
    }

    public void setModuleParams(String connected, int name) {
        mConnected = connected;
        mName = name;
    }

    public void removeServiceReference() {
        mService = null;
    }

    @Override
    public String getName() {
        return "ContactsManager";
    }

    public String getubicacion() {
        String ubicacion = ubica;
        return ubicacion;
    }
// metodo reproducir cancion y cambio
    // le llega directorio de mp3, verificamos si ya ha reproducido o no una cancion o el metodo es null
    // asi decidimos inicializar o hacer cambio de cancion el metodo cambio de cancion
    @ReactMethod
    public void Reproducir(String UbicacionCancion, Promise promesa) throws InterruptedException {
        ubica = UbicacionCancion;
if(toast.reproductor==null){
            System.out.println("nullo");
            if (mService == null) {
                mService = new Intent(mContext, toast.class);
                mContext.startService(mService);
            }
            while (mName == 0) {
                Thread.sleep(800);
            }
            promesa.resolve(mName);
            System.out.println("full" + mName);
        }else{
    System.out.println("no nullo");
    while (mName == 0) {
        Thread.sleep(800);
    }
    promesa.resolve(mName);
    System.out.println("full" + mName);
    toast.cambioCancion(getReactApplicationContext());}}



    @ReactMethod
    private void pausarCancion(String m) {
        System.out.println(Environment.getDataDirectory());

        toast.pausarCancion(m);

    }
// metodo donde uso la instancia de classe reproducir y el metodo de media player
    @ReactMethod
    private void reanudarCancion() {
        toast.reproductor.start();

    }

    @ReactMethod
    private void cancelar() {
        toast.cancelar();
    }
    @ReactMethod
    private void cambioCancion() {

    }
}